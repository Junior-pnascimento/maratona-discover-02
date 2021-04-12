const Job = require("../model/Job");
const JobUtils = require("../utils/JobUtils");
const Profile = require("../model/Profile");

module.exports = {
  async index(req, res) {
    //criando variáveis para receber a resposta do Model
    //  NAO PODE PEGAR NADA DO MODEL ELE DEVE DISPONIBILIZAR.
    const jobs = await Job.get();
    const profile = await Profile.get();

    let statusCount = {
      progress: 0,
      done: 0,
      total: jobs.length,
    };

    // Total de horas por dia de cada JOB em Progress
    let jobTotalHours = 0;

    const updatedJobs = jobs.map((job) => {
      // Ajustes no Job
      const remaining = JobUtils.remainingDays(job);
      const status = remaining <= 0 ? "done" : "progress";

      // status = done
      // statusCount[done] +=1
      // somando quantidade de status
      statusCount[status] += 1;

      // Total de horas por dia de cada JOB em Progress
      // use Ternário sempre que puder
      jobTotalHours =
        status == "progress"
          ? jobTotalHours + Number(job["daily-hours"])
          : jobTotalHours;

      // if (status == 'progress') {
      //     jobTotalHours =+ Number(job['daily-hours'])

      // }

      return {
        ...job,
        remaining,
        status,
        budget: JobUtils.calculateBudget(job, profile["value-hour"]),
      };
    });

    // qtd de horas que quero trabalhar dia (PROFILE)
    // menos
    // qtd de horas/dia de cada JOB em PROGRESS
    const freeHours = profile["hours-per-day"] - jobTotalHours;

    return res.render("index", {
      jobs: updatedJobs,
      profile: profile,
      statusCount: statusCount,
      freeHours: freeHours,
    });
  },
};
