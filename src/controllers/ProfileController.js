const Profile = require('../model/Profile')


module.exports = {
    async index(req, res) {
        return res.render("profile", { profile: await Profile.get() })
    },

   async update(req, res) {
        // req.body p/ pegar os dados
        const data = req.body

        // definir qts semanas tem num ano: 52
        const weeksPerYear = 52

        // remover ferias p/ pegar semanas no mes de trabalho
        const weeksPerMonth = (weeksPerYear - data["vacation-per-year"]) / 12

        // total de horas trabalhadas na semana
        const weekTotalHours = data["hours-per-day"] * data["days-per-week"]

        // horas trabalhadas no mes 
        const monthlyTotalHours = weekTotalHours * weeksPerMonth

        // Valor da Hora
        const valueHour = data["monthly-budget"] / monthlyTotalHours


        const profile = await Profile.get()

        // Pede para o /model/Profile.js na update atualizar os dados 

       await Profile.update({
            ...profile,
            ...req.body,
            "value-hour": valueHour
        })

        return res.redirect('/profile')
    }


}