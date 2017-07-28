
import {
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLObjectType

} from 'graphql'

export const TodoType = new GraphQLObjectType({
    name: 'todo',
    fields: function () {
        return {
            id: {
                type: GraphQLID
            },
            title: {
                type: GraphQLString
            },
            completed: {
                type: GraphQLBoolean
            }
        }
    }
});