import {
    GraphQLObjectType,

    GraphQLSchema,

    GraphQLNonNull,

    GraphQLList,

    GraphQLString

} from 'graphql'

import {Todos} from './todos.js'

import {TodoType} from './todo_type.js'

const mongoGraphqlSchema = new GraphQLSchema({

    query: new GraphQLObjectType({

        name: 'RootQueryType',

        fields: {

            todos: {
                type: new GraphQLList(TodoType),
                args: {
                    title: {
                        name: 'Todo title',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: function(root, {title}) {
                    console.log(title)
                    let todo = Todos.findOne({title: title})
                    console.log(todo)
                    return Todos.find({title: title});
                }
            }

        }

    }),
    mutation: new GraphQLObjectType({

        name: 'RootMutationType',

        fields: {

            addTodos: {

                type: TodoType,

                description: 'Updates the count',
                args: {
                    title: {
                        name: 'Todo title',
                        type: new GraphQLNonNull(GraphQLString)
                    }
                },
                resolve: function(root, args) {
                    console.log(args)
                    let newTodo = new Todos({
                        title: args.title,
                        completed: false
                    })
                    newTodo.id = newTodo._id
                    return  newTodo.save();
                }

            }

        }

    })

})



export default mongoGraphqlSchema;