import mongoose,  {Schema} from "mongoose";
import { User } from "./user.model";

const subscriptionSchema = new Schema({
    subsciber:{
        type: Schema.Types.ObjectId,//one who is subscribing
        ref: "User"
    },
    channel:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

export const Subscription= mongoose.model("Subscription",subscriptionSchema)