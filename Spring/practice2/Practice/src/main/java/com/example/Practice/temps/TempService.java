package com.example.Practice.temps;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.Practice.jobs.Job;
import com.example.Practice.jobs.JobsRepository;


@Service
@Transactional
public class TempService {
	
	@Autowired
	private TempsRepository tempRepo;
	
	@Autowired
	private JobsRepository jobRepo;
	
	public Temp enrollJobToTemp(Long tempId, Long jobId) {
		Temp temp = tempRepo.findById(tempId).get();
		Job job = jobRepo.findById(jobId).get();
		
		temp.setJobs(job);
		System.out.println(temp);
		tempRepo.save(temp);
		return temp;
		
	}
	
	public Temp createTemp(TempCreateDTO data) {
		Temp newTemp = new Temp(data.getFirstName(), data.getLastName());
		tempRepo.save(newTemp);
		return newTemp;
	}
	
	public Temp createTempWithJob(TempCreateDTO data) {
		Temp newTemp = new Temp(data.getFirstName(), data.getLastName(), data.getJobs());
		tempRepo.save(newTemp);
		return newTemp;
	}
	
	public List<Temp> findAll() {
		return tempRepo.findAll();
	}
	
	public Optional<Temp> findById(Long id) {
		return tempRepo.findById(id);
	}
	
	public boolean delete(Long id) {
		Optional<Temp> ifTemp = tempRepo.findById(id);
		if (ifTemp.isEmpty()) {
			return false;
		} else {
			tempRepo.deleteById(id);
			return true;
		}
	}
	

}
