// import { Schema, Document, model, Types, models } from 'mongoose'
import { mongoose } from './db'

export interface IUser extends mongoose.Document{
    name: string;
    username: string;
    password: string;
    email: string;
    profileImg?: string;
    followers: mongoose.Types.ObjectId[];
    followingUsers: mongoose.Types.ObjectId[];
    followingCategories: mongoose.Types.ObjectId[];
}

const userSchema = new mongoose.Schema<IUser>({
    name:{
        type: String,
        required:true
    },
    username:{
        type: String,
        required:true
    },
    email:{
        type: String,
        required:true
    },
    password:{
        type: String,
        required:true
    },
    profileImg:{
        type: String,
    },
    followers:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
    }],
    followingUsers:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
    }],
    followingCategories:[{
        type: String,
        // required:true
    }],
}, { timestamps: true })

export const User = mongoose.models?.User || mongoose.model<IUser>('User', userSchema)  

export interface IComment extends mongoose.Document{
    postId: mongoose.Types.ObjectId;
    authorId: mongoose.Types.ObjectId;
    likes: mongoose.Types.ObjectId[];
    replies: mongoose.Types.ObjectId[];
}

const commentSchema = new mongoose.Schema<IComment>({
    postId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'Post', 
        required: true
    },
    authorId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'User',
        required: true
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
    }],
    replies:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'Comment'
    }],
}, { timestamps: true })

export const Comment = mongoose.models?.Comment || mongoose.model<IComment>('Comment', commentSchema)

export interface IPost extends mongoose.Document{
    title: string;
    isDraft: boolean;
    content: string;
    categories: string[];
    author: mongoose.Types.ObjectId;
    views: number;
    likes: mongoose.Types.ObjectId[];
    coverPic: string;
    comments: IComment[];
    shares: mongoose.Types.ObjectId[];
}

//@ts-ignore
const postSchema = new mongoose.Schema<IPost>({
    title:{
        type: String,
        required: function(){
            return !this.isDraft;
        }
    },
    isDraft:{
        type: Boolean,
        default: true
    },
    content:{
        type: String,
        required: function(){
            return !this.isDraft;
        }
    },
    categories:{
        type: [{
            type: String,
            required: function(){
                return !this.isDraft;
            }
        }],
        validate:{
            validator: function(this:IPost, categories: string[]){
                return categories.length > 0 || this.isDraft;
            }
        }
    },
    views:{
        type: Number,
        default: 0
    },
    author:{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
    },
    coverPic:{
        type: String,
        default:'/images/blog1.png'
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
    }],
    comments:[{
            type: mongoose.Schema.Types.ObjectId ,
            ref:'Coment'
    }],
    shares:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
    }],
}, { timestamps: true })

export const Post = mongoose.models?.Post || mongoose.model<IPost>('Post', postSchema) 

// export interface ICategory extends mongoose.Document{
//     name: string;
// }

// const categorySchema = new mongoose.Schema<ICategory>({
//     name:{
//         type: String,
//         required: true
//     }
// }, { timestamps: true })

// export const Category = mongoose.models?.Category || mongoose.model<ICategory>('Category', categorySchema) 