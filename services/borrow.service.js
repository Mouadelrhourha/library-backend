const { log } = require('debug/src/browser');
const borrowRepository =require('../repositories/borrow.repository');
const { getCategorieById } = require('../repositories/category.repository');
const { getBookById } = require('./books.service');
const { getUserById } = require('./user.service');

const getAllBorrow= async function(){
  // const foundCategoryName = await getBookById()
  // console.log(foundCategoryName);
  return await borrowRepository.getAllBorrow();
};
const getBorrowById= async function(id){

  return await borrowRepository.getBorrowById(id);

};

// const createBorrow= async function({userId,bookId,borrow_date,return_date}){
//     const user = (await getUserById(userId))[0];
//     console.log(user);
    
//    const  book= (await getBookById(bookId))[0];
    
//     return await borrowRepository.createBorrow({borrow_date,return_date,user,book})

// }

// const deleteBorrow = async function(id){

//     const deletedBorrow=  await borrowRepository.deleteBorrow(id); 

//     const user= (await getUserById(deletedBorrow.user_id))[0];
//     const book =( await getBookById(deletedBorrow.book_id))[0];
//     return {
       
//         id : deletedBorrow.id,
//         user,
//         book,
//         borrowDate : deletedBorrow.borrow_date,
//         returnDate : deletedBorrow.return_date,
//     }
// }

const createBorrow= async function ({userId,bookId,borrow_date,return_date}) {

  const user= (await getUserById(userId))[0];
  const book = (await getBookById(bookId))[0];
  return await borrowRepository.createBorrow({user,book,borrow_date,return_date});
};

const deleteBorrow = async function (id) {

  const deletedBorrow = await borrowRepository.deleteBorrow(id);
  const user = await getUserById(deletedBorrow.user_id);
  const book = await getBookById(deletedBorrow.book_id);
  return {
    id: deletedBorrow.id,
    user,book,
    borrowDate : deletedBorrow.borrow_date,
    returnDate : deletedBorrow.return_date
  };
  
};
const getBorrowCount= async function(){

  return await borrowRepository.borrowCount();

};
const getBorrowedBookOfUser = async function(id){

  return await borrowRepository.findBorrowedBookOfUser(id);

};
const getBorrowedBookByUserCount = async function (strDate,endDate){

  return await borrowRepository.borrowedBookByUserCount(strDate,endDate);
};
const getCategoriesPopular = async function (){

  return await borrowRepository.findCatgorieesPolular();
};
module.exports={
  getAllBorrow,getBorrowById,createBorrow,deleteBorrow,getBorrowCount,getBorrowedBookOfUser,getBorrowedBookByUserCount,getCategoriesPopular
};