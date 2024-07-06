require('dotenv').config()
const express = require('express');
const app = express()

const port = 4000

const apiGihub = {
    "login": "AmanKumar-09",
    "id": 129621345,
    "node_id": "U_kgDOB7ndYQ",
    "avatar_url": "https://avatars.githubusercontent.com/u/129621345?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/AmanKumar-09",
    "html_url": "https://github.com/AmanKumar-09",
    "followers_url": "https://api.github.com/users/AmanKumar-09/followers",
    "following_url": "https://api.github.com/users/AmanKumar-09/following{/other_user}",
    "gists_url": "https://api.github.com/users/AmanKumar-09/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/AmanKumar-09/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/AmanKumar-09/subscriptions",
    "organizations_url": "https://api.github.com/users/AmanKumar-09/orgs",
    "repos_url": "https://api.github.com/users/AmanKumar-09/repos",
    "events_url": "https://api.github.com/users/AmanKumar-09/events{/privacy}",
    "received_events_url": "https://api.github.com/users/AmanKumar-09/received_events",
    "type": "User",
    "site_admin": false,
    "name": "Aman ",
    "company": null,
    "blog": "",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 18,
    "public_gists": 0,
    "followers": 0,
    "following": 2,
    "created_at": "2023-04-01T18:45:04Z",
    "updated_at": "2024-07-04T15:03:08Z"
  }

app.get("/", (req, res)=>{
    res.send("Hello World !")
})

app.get("/linkedin", (req, res) =>{
    res.send("Aman - Linkedin.com")
})

app.get("/login", (req, res)=>{
    res.send('<h1> Welcom to the Login Page </h1>')
})

app.get("/github", (req, res) =>{
    res.json(apiGihub)
})

app.listen(process.env.PORT , (req, res)=>{
    console.log(`we are listening the port ${port}`)
} )