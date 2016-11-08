var Skb = require('skb');
var token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ODE4ZDI4ODJmYjc0ZDAwMTFiZTdjNjQiLCJ1c2VybmFtZSI6ImVtdnNlQHlhLnJ1Iiwicm9sZSI6InVzZXIiLCJpYXQiOjE0NzgwMjE3NzB9.4LAx9mnnHbfREeJBa-qeoj6wQHpXX0PTh_t2nhSay34';
var skb = new Skb(token);
skb.taskHelloWorld('Мой любой текст.');