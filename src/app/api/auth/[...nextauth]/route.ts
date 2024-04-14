import NextAuth from 'next-auth/next';
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { connectToDatabase } from '@/lib/mongodb';
import user from '../../../../../models/user';
import hospital from '../../../../../models/hospital';

export const authOptions = {
    providers: [
      CredentialsProvider({
        name: "credentials",
        credentials: {},
  
        async authorize(credentials) {
          const { email, password } = credentials;
  
          try {
            await connectToDatabase();
            let User = await user.findOne({ email });
  
            if (!User) {
                User = await hospital.findOne({ email });
            }
            if (!User){
                return null; 
            }
  
            const passwordsMatch = await bcrypt.compare(password, User.password);
  
            if (!passwordsMatch) {
              return null;
            }
  
            return User;
          } catch (error) {
            console.log("Error: ", error);
          }
        },
      }),
    ],
    session: {
      strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET,
    pages: {
      signIn: "/sign-in",
    },
  };
  
  const handler = NextAuth(authOptions);
  
  export { handler as GET, handler as POST };