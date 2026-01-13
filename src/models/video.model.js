import mongoose, {Schema} from "mongoose";
import mongooseAggreatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile:{
      type:String, //cloudinamry url 
      required :true
    },
    thumbnail:{
      type:String, //cloudinamry url 
      required :true
    },
    title:{
      type:String,
      required :true
    },
    description:{
      type:String, 
      required :true
    },
    duration:{
      type:Number, //cloudinamry url 
      required :true
    },
    views:{
      type:Number,
      default:0
    },
     isPublished:{
        type:Boolean,
        default:true
    },
    owner:{
      type:Schema.Types.ObjectId,
      ref:"User",
      required: true
    }
  },
  {
    timestamps:true
  }
)
videoSchema.plugin(mongooseAggreatePaginate);

export const Video = mongoose.model("Video",videoSchema)