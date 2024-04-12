import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';
import { login } from '@/app/signin/login'


export const authOptions = {	
	pages: {
		signIn: '/signin'
	  }	,
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    Credentials({
		name: "Credentials",
    // `credentials` is used to generate a form on the sign in page.
    // You can specify which fields should be submitted, by adding keys to the `credentials` object.
    // e.g. domain, username, password, 2FA token, etc.
    // You can pass any HTML attribute to the <input> tag through the object.
    	credentials: {
      		username: { label: "Username", type: "text", placeholder: "jsmith" },
      		password: { label: "Password", type: "password" }
    	},
		
		async authorize(credentials) {
			console.log("from next auth "+ credentials?.username) 

			const username = 	credentials?.username || "";
			const password = credentials?.password || "" ;

			let ret = await login(username, password) ;

			if (ret == 200) {
				return  { name : username, email : "test@email.com"}
			}

			/* if (credentials?.username === "manoj" || credentials?.username === "john") {
				return { name : credentials.username , email : "test@email.com"}
			} else {
				return null;
			} */
		}	
	  }),
  ],
  session: {
	maxAge: 60
  }
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };