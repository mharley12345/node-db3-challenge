const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)


module.exports ={
    find,
    findById,
    findSteps,
      add,
     update,
     remove
}
function find(){
    return db('schemes')
};

function findById(id){
    return db('schemes').where({id}).first()
}
function findSteps(id) {
    return db("steps")
      .join("schemes", "schemes.id", "steps.scheme_id")
      .select(
        "steps.id",
        "schemes.scheme_name",
        "steps.step_number",
        "steps.instructions"
      )
       .orderBy('steps.step_number')
      .where("schemes.id", id);
  }

  function add(schemeData){
    
      return db("schemes")
      .insert(schemeData) 
 
  }
 function update(changes, id){
     return db("schemes")
     .update(changes)
     .where("schemes.id",id)
 }

function remove(id){
  return db("schemes")
  .delete()
  .where("schemes.id",id)
}