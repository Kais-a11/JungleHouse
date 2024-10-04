const express=require('express');
const app=express();


let users=[
    {id:1,name:'Jhon'},
    {id:2,name:'Jane'}

]

app.get("/users",(req,res) =>
{
    res.json(users);
})

app.get("/users/:id", (req,res) =>
{
    const userId=parseInt(req.params.id);
    const user=users.find(user=> user.id === userId);
    if(!user)
        {
            return res.status(404).json(
                {msg:'Utilisateur non trouvé '}
            );

        }
        res.json(user);
})

app.post("/users", (req,res) =>
{
    const newUser={
        id:users.length+1,
        name:req.body.name,
    };
    users.push(newUser);
    res.status(201).json(newUser);
})

app.put("/users/:id", (req,res)=>
{
    const userId=parseInt(req.params.id);
    const userIndex=users.findIndex(
        (user)=> user.id=== userId
    );
    if(userIndex === -1)
        {
            return res.status(404).json(
                {message:'Utilisateur non trouvé'}
            )
        }
    users[userIndex].name=req.body.name
    res.json(users [userIndex])
})

app.delete('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const userIndex = users.findIndex(user => user.id === userId);

    if (userIndex === -1) {
        return res.status(404).json({ message: 'Utilisateur non trouvé' });
    }
    users.splice(userIndex, 1);
    res.status(200).json({ message: 'Utilisateur supprimé avec succès' });
});

app.delete('/userss/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    users=users.filter(user=> user.id !==userId);
    res.sendStatus(204);
});




app.get('/',(req,res)=>{
    res.send('Hello , World')
});
const port =process.env.PORT ||3000;
app.listen(port,()=>{
    console.log('Server is running on port ' +port)
});