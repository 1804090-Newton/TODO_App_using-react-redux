
 const  {createSlice}=require('@reduxjs/toolkit');

   const initialBooks={
    books:[
        {id:1, title:"Beautiful Life" , author:" Sourav vai"},
        {id:2, title:"redux er hate khori" , author:" Newton"},

    ],
   }


   export const bookSlice=createSlice({
     name:"books",
     initialState: initialBooks,
     reducers:{
        showBooks:(state)=>state,
     },
   });

   export const {showBooks}=bookSlice.actions;
   export default BookSlice.reducer;




