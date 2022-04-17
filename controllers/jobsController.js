import Job from '../models/Job.js'
import { StatusCodes } from 'http-status-codes'
import {
  BadRequestError,
  NotFoundError,
  UnAuthenticatedError,
} from '../errors/index.js'


const createJob = async (req, res) => {
  const { position, company } = req.body

  if (!position || !company) {
    throw new BadRequestError('Please provide all values')
  }
  req.body.createdBy = req.user.userId
  const job = await Job.create(req.body)
  res.status(StatusCodes.CREATED).json({ job })
}
const getAllJobs = async (req, res) => {
 
}
const updateJob = async (req, res) => {
  
}
const deleteJob = async (req, res) => {
 
}
const showStats = async (req, res) => {
  
}

export { createJob, deleteJob, getAllJobs, updateJob, showStats }
