const { client } = require('../database/database');

const getAllCategories = async function(){
  const allCategories = await client.query('select * from categories');
  return allCategories.rows;
};

const addCategories = async function(category){
  const addCategoryQuery=('insert into categories (name) values ($1) returning * ');
  const values = [category.name];
  const CategorieQuery = await client.query(addCategoryQuery,values);
  return CategorieQuery.rows[0];
};

const getByName = async function (name){
  const checkName = await client.query('select * from categories where name=$1',[name]);
  return checkName.rows[0];
};

const getCategorieById = async function(id){
  const queryId= await client.query('select * from categories where id=$1',[id]);
  return queryId.rows[0];
};

const updateCategorie = async function(id,category){
  const queryUpdate =('update categories set name=$2   where id=$1 returning *');
  values=[id,category.name];
  const updateCategory = await client.query(queryUpdate,values);
  return updateCategory.rows[0];
};
const deleteCategorie = async function(id){
  const queryDelete= await client.query('delete from categories where id=$1 returning * ',[id]);
  return queryDelete.rows[0];
};

module.exports={
  getAllCategories,addCategories,getCategorieById,updateCategorie,deleteCategorie,getByName,
};