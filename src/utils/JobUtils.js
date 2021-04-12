module.exports = {
    remainingDays(job) {
        //Calcular o tempo de cada job
        const remainingDays = (job['total-hours'] / job['daily-hours']).toFixed()
     
        const createdDate = new Date(job.created_at)
        const dueDay = createdDate.getDate() + Number(remainingDays)
        const dueDateInMs = createdDate.setDate(dueDay)
        
        const timeDiffInMs = dueDateInMs - Date.now()
        //transformar milissegundos em dias
        const dayInMs = 1000 * 60 * 60 * 24
        const dayDiff = Math.ceil(timeDiffInMs / dayInMs)

        //restam X dias
        return dayDiff
    },
    calculateBudget: (job, valueHour) =>  valueHour * job["total-hours"]
}