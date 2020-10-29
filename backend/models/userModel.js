import mongoos from 'mongoose';

const userSchema = mongoos.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, required: true, default: false },
  },
  {
    //created and updated at will be automatically generated.
    timestamps: true,
  }
);

const User = mongoose.model('User', userSchema);

export default User;
