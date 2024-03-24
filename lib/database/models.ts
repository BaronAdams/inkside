// import { Schema, Document, model, Types, models } from 'mongoose'
import { mongoose } from './db'

export interface IUser extends mongoose.Document{
    name: string;
    username: string;
    password: string;
    email: string;
    profileImg?: string;
    followers: mongoose.Types.ObjectId[];
    following: mongoose.Types.ObjectId[];
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
    following:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
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
        ref:'User'
    }],
}, { timestamps: true })

export const Comment = mongoose.models?.Comment || mongoose.model<IComment>('Comment', commentSchema)

export interface IPost extends mongoose.Document{
    title: string;
    content: string;
    categories: string[];
    authorId: mongoose.Types.ObjectId;
    views: number;
    likes: mongoose.Types.ObjectId[];
    // comments: string[];
    shares: mongoose.Types.ObjectId[];
}

const postSchema = new mongoose.Schema<IPost>({
    title:{
        type: String,
        required:true
    },
    content:{
        type: String,
        required:true
    },
    categories:[{
        type: String,
        required:true
    }],
    views:{
        type: Number,
        default: 0
    },
    likes:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
    }],
    // comments:[{
        //     type: Schema.Types.ObjectId ,
        //     ref:'Coment'
        // }],
    shares:[{
        type: mongoose.Schema.Types.ObjectId ,
        ref:'User'
    }],
}, { timestamps: true })

export const Post = mongoose.models?.Post || mongoose.model<IPost>('Post', postSchema)


