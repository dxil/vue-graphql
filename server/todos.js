var mongoose = require('mongoose')
export const Todos = mongoose.model('Todo', {
    id: mongoose.Schema.Types.ObjectId,
    title: String,
    completed: Boolean
})