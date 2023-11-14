import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { NextAuthOptions, User, getServerSession } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import prisma from "./connect";




export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      // clientId: process.env.GOOGLE_ID as string,
      // clientSecret: process.env.GOOGLE_SECRET as string,
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  
};

export const getAuthSession = () => getServerSession(authOptions);