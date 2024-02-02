const Cricket=require('../models/cricket');

exports.insertCricket = (req, res, next) => {
    const name = req.body.name;
    const dob = req.body.dob;
    const imgUrl = req.body.imgUrl;
    const birthPlace = req.body.birthPlace;
    const career = req.body.career;
    const matches = req.body.matches;
    const score = req.body.score;
    const fifties = req.body.fifties;
    const centuries = req.body.centuries;
    const wickets = req.body.wickets;
    const average = req.body.average;
    Cricket.create({
      name: name,
      dob: dob,
      imgUrl: imgUrl,
      birthPlace: birthPlace,
      career: career,
      matches: matches,
      score: score,
      fifties: fifties,
      centuries: centuries,
      wickets: wickets,
      average: average
    })
    .then(result=>{
      console.log('Created player details');
      res.redirect('/get-cricket')
    })
    .catch(err => {
      console.log(err)
    })
  };

exports.getCricket=(req,res,next)=>{
    const name=req.params.name;
    console.log(name);
    Cricket.findAll({
        where:{
            name : name
        }
    })
    .then(cricket=>{
        console.log('Got player details');
        console.log(cricket[0])
        res.json(cricket[0])       
    })
    .catch(err=>console.log(err))
}

exports.updateCricket=(req,res,next)=>{
  const id=req.params.id;
  console.log(id);
  Cricket.findByPk(id)
  .then(cricket=>{
    console.log(id);
    cricket.name = req.body.name;
    cricket.dob = req.body.dob;
    cricket.imgUrl = req.body.imgUrl;
    cricket.birthPlace = req.body.birthPlace;
    cricket.career = req.body.career;
    cricket.matches = req.body.matches;
    cricket.score = req.body.score;
    cricket.fifties = req.body.fifties;
    cricket.centuries = req.body.centuries;
    cricket.wickets = req.body.wickets;
    cricket.average = req.body.average;

    cricket.save()
    .then(result=>{
      console.log("updated...");
    })
    .catch(err=>console.log(err));
  })
  .catch(err=>console.log(err))
}