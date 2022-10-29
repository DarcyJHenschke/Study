package com.example.Practice.temps;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import com.example.Practice.jobs.Job;

@Entity

public class Temp {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	Long id;
	
	@Column
	String firstName;
	
	@Column
	String lastName;
	
	@OneToMany(cascade = CascadeType.ALL)
	private List<Job> jobs;
	
	public Temp() {
		
	}

	public Temp(String firstName, String lastName) {
		this.firstName = firstName;
		this.lastName = lastName;
	}

	public Temp(String firstName, String lastName, List<Job> jobs) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.jobs = jobs;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public List<Job> getJobs() {
		return jobs;
	}

	public void setJobs(Job job) {
		jobs.add(job);
	}
	
	
	
	
	
	

	
	
}
