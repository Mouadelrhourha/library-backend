const borrowService= require ('../services/borrow.service');

const getAllBorrowHandler= async function(req,res){

  const getAllBorrow = await borrowService.getAllBorrow();
  res.json(getAllBorrow);
};

const getBorrowByIdHandler = async function(req,res){

  const id=req.params.id;
  const getBorrowById = await borrowService.getBorrowById(id);
  res.json(getBorrowById);
};

// const createdBorrowHandler = async function(req,res){

//     const {userId,bookId,borrow_date,return_date}=req.body;
//     const createdBorrow = await borrowService.createBorrow(req.body);
//     res.json(createdBorrow);
// }

// const deleteBorrowHandler = async function(req,res){
//     const id =req.params.id;
//     const deletedBorrow = await borrowService.deleteBorrow(id);
//     res.json(deletedBorrow)

// }

const createBorrowHandler= async function(req,res){

  const {userId,bookId,borrow_date,return_date}=req.body;
  const createdBorrow = await borrowService.createBorrow(req.body);
  res.json(createdBorrow);
};

const deletedBorrowHandler = async function(req,res){

  const id=req.params.id;
  const deleteBorrow= await borrowService.deleteBorrow(id);
  res.json(deleteBorrow);
};
const getBorrowCountHandler = async function(req,res){

  const borrowCount= await borrowService.getBorrowCount();
  res.json(borrowCount);
};
const getBorrowedBookOfUserHandler = async function(req,res){
  const id = req.params.id;
  const borrowedBookOfUser= await borrowService.getBorrowedBookOfUser(id);
  res.json(borrowedBookOfUser);
};

const getBorrowedBookByUserCountHandler = async function(req,res){
  const {strDate,endDate}= req.query;
  const getBorrowedBookByUser = await borrowService.getBorrowedBookByUserCount(strDate,endDate);
  res.json(getBorrowedBookByUser);
};
const getCategoriesPopularHandler = async function(req,res){

  const categoriesPopular= await borrowService.getCategoriesPopular();
  res.json(categoriesPopular);
};

module.exports={

  getAllBorrowHandler,getBorrowByIdHandler,createBorrowHandler,deletedBorrowHandler,getBorrowCountHandler,getBorrowedBookOfUserHandler,getBorrowedBookByUserCountHandler,getCategoriesPopularHandler
};