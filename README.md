# 14 Model-View-Controller (MVC): Tech Blog

homepage, which includes existing blog posts if any

navigation links => 
HOME
DASHBOARD
LOGIN
LOGOUT

click on any other links in the navigation => prompted to either sign up or sign in

choose to sign up => prompted to create a username and password

click on the sign-up button => user credentials are saved => logged in

LOGIN => prompted to enter my username and password => logged in

HOME => Homepage w existing blog posts that show post title and date created

click on an existing blog post => 
post title
contents
post creaters username
date created
option to leave a comment

enter comment click submit (while logged in) => 
comment saved
post updated to show new comment
comment creators username
date created
<!-- Make submit button only available if logged in? -->

DASHBOARD => presented with any blog posts I have already created and the option to add a new blog post

ADD NEW POST BUTTON => prompted to enter both a title and contents for my blog post

SAVE NEW POST BUTTON => title and contents of my post are saved and I am taken back to an updated dashboard with my new blog post

click on one of my existing posts in the dashboard => 
able to delete or update my post and taken back to an updated dashboard

LOGOUT => signed out of the site

idle on the site => able to view comments but I am prompted to log in again before I can add, update, or delete comments

# Handlebars
main (homepage) 
    nav bar w HOME DASHBOARD LOGIN LOGOUT
    all existing blog posts

dashboard
    nav bar w HOME DASHBOARD LOGOUT
    users existing blog posts
    ADD NEW POST BUTTON

login
    enter username
    enter password

signup
    create username
    create password
    SIGNUP BUTTON

post
    post title
    post text
    SUBMIT BUTTON



# Routes
index.js
    use.homepageRoutes
    use.dashboardRoutes

homepage-routes.js
    get signup
    get login
    get all posts
    get one post

dashboard-routes
    ?????


