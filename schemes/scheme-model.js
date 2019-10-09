const knex = require('knex')
const knexConfig = require('../knexfile')
const db = knex(knexConfig.development)


module.exports ={
    find,
    findById,
    findSteps,
      add,
     update,
    // remove
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
      .where("schemes.id", id);
  }

  function add(scheme){
      return db('scheme') 
      .then(([id])=>{
          return findById(id)
      })
  }
 function update({changes}, id){
     return ({data:updatedScheme})
 }

function del(id){
    if(id){
        return db.del()
    }else return db}