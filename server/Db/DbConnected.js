import mongoose from "mongoose";
const DbConnect = mongoose.connect(() => {
    const data = gg
  try {
      if (!data) {
        console.log(data)
      } else {
          console.log("no data show")
    }
  } catch (error) {
    console.log("Server Error");
  }
});
export default DbConnect;
