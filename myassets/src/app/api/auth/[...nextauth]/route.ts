import NextAuth from "next-auth";
import Credentials from 'next-auth/providers/credentials';


export const authOptions = {	
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
			const user = { id: "1", name: "manoj", email: "jsmith@example.com" }
			console.log("from next auth "+ credentials?.username) 

			if (credentials?.username === "manoj" || credentials?.username === "john") {
				return { name : credentials.username , email : "test@email.com"}
			} else {
				return null;
			}

			/* if (user) {
			  // Any object returned will be saved in `user` property of the JWT
			  return user
			} else {
			  // If you return null then an error will be displayed advising the user to check their details.
			  return null
			} */
		}	
	  }),
  ],
};

export const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };