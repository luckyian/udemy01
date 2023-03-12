const express = require('express');
const app = express();

// import express from "express";

app.get('/', (req, res)=>{
    res.send({hi: 'there'})


});

app.listen(3000);