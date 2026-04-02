//1.Create a git repository local add and commit a simple web application consisting of 5 pages. Create a remote repository in github.com. Push the above local repository to the github.com. Explore the push, pull and fetch options with remote repository.

Create a folder:
my - web - app

    //index.html
    < !DOCTYPE html >
<html>
<head><title>Home</title></head>
<body>
<h1>Home Page</h1>
<a href="about.html">About</a> |
<a href="contact.html">Contact</a> |
<a href="services.html">Services</a> |
<a href="login.html">Login</a>
</body>
</html>

//about.html
<html><body><h1>About Page</h1></body></html>

//contact.html
<html><body><h1>Contact Page</h1></body></html>

//services.html
<html><body><h1>Services Page</h1></body></html>

//login.html
<html><body><h1>Login Page</h1></body></html>

//Github
--> Go to Github
--> click on + icon
--> create NewRepository: my - web - app

//GitBash
--> Then go to Gitbash and open the floder location.
    For Ex:cd "/c/FSD Internal/my-web-app"
--> git init
--> git add.
    git commit - m "Initial commit"
--> Now paste the url of your repository
    git remote add origin https://github.com/your-username/my-web-app.git
--> git branch - M main(optional)
--> git push - u origin main

--> git remote - v