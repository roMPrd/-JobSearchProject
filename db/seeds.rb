# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

puts "destroying seed"
User.destroy_all
puts "Seed destroyed"

puts "creating seed"

puts "creating users"
user = User.create!(email: "default@default.com", password: "123456", role: 1)
user.save!

user1 = User.create!(email: "default1@default.com", password: "123456", role: 0)
user1.save!
puts "users created"

puts "creating offers"
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Paris", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.", send_date: "2021-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: false, user: user)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Paris", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.", send_date: "2021-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: false, user: user)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Paris", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.", send_date: "2021-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: false, user: user)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Paris", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.", send_date: "2021-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: false, user: user)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Paris", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.", send_date: "2021-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: false, user: user)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Paris", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.", send_date: "2021-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: false, user: user)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Paris", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.", send_date: "2021-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: false, user: user)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Paris", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products, which include online advertising technologies, a search engine, cloud computing, software, and hardware.", send_date: "2021-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: false, user: user)
puts "offers of user created"
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Berlin", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products.", send_date: "2023-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: true, user: user1)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Berlin", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products.", send_date: "2023-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: true, user: user1)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Berlin", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products.", send_date: "2023-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: true, user: user1)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Berlin", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products.", send_date: "2023-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: true, user: user1)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Berlin", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products.", send_date: "2023-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: true, user: user1)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Berlin", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products.", send_date: "2023-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: true, user: user1)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Berlin", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products.", send_date: "2023-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: true, user: user1)
Offer.create!(job_title: "Junior Developer", company_name: "Google", job_location: "Berlin", company_info: "Google is an American multinational technology company that specializes in Internet-related services and products.", send_date: "2023-06-01", application_letter: "I am a junior developer with 2 years of experience in Ruby on Rails.", cv: "https://www.google.com", archived: true, user: user1)
puts "offers of user1 created"

puts "Seeding done!"
