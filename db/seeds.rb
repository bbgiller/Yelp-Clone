# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#create_table "businesses", force: :cascade do |t|
#Business
# t.string "name", null: false
# t.string "address", null: false
# t.string "category", null: false
# t.string "website"
# t.string "phone_number"
# t.datetime "created_at", null: false
# t.datetime "updated_at", null: false
# t.float "latitude", null: false
# t.float "longitude", null: false
# t.index ["address"], name: "index_businesses_on_address", unique: true
# t.index ["name"], name: "index_businesses_on_name", unique: true
# end
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri';


User.destroy_all

Business.destroy_all

 User.create([{email: 'arthurmorgan@gmail.com', password: '123456', 
    first_name: 'Arthur', last_name: 'Morgan', zip_code:'1000'}])

#blue_barn
blue_barn = Business.create({name: 'Blue Barn', 
   address: '2237 Polk Street, San Francisco, CA 94109',
   category:'Restaurant',
   website:'http://www.bluebarngourmet.com',
   phone_number: '415-655-9438',
   latitude: 37.797673,
   longitude: -122.422318,
   weekday_hours: '11:00 am - 8:00 pm',
   weekend_hours: '11:00 am - 8:00 pm'})

blue_barn_1 = open('https://yalp-seeds.s3-us-west-1.amazonaws.com/blue_barn_1.jpeg')

blue_barn.photos.attach(io: blue_barn_1, filename:'blue_barn_1.jpeg')

#purple rice
purple_rice = Business.create({name: 'Purple Rice', 
   address: '509 Haight St, San Francisco, CA 94117',
   category:'Restaurant',
   website:'https://purplerice.menu11.com/',
   phone_number: '415-932-6257',
   latitude: 37.772116,
   longitude: -122.430798,
   weekday_hours: '4:30 pm - 9:30 pm',
   weekend_hours: '4:30 pm - 9:30 pm'})

purple_rice_1 = open('https://yalp-seeds.s3-us-west-1.amazonaws.com/purplerice1.jpg')

purple_rice.photos.attach(io: purple_rice_1, filename:'purplerice1.jpeg')

#Kilowatt
kilowatt = Business.create({name: 'Kilowatt', 
   address: '3160 16th St, San Francisco, CA 94103',
   category:'Bar',
   website:'http://kilowattbar.com/',
   phone_number: '415-861-2595',
   latitude: 37.7650044,
   longitude: -122.4254622,
   weekday_hours: '5:00 pm - 2:00 am',
   weekend_hours: '3:00 pm - 2:00 am'})

kilowatt_1 = open('https://yalp-seeds.s3-us-west-1.amazonaws.com/kilowatt1.jpg')
kilowatt.photos.attach(io: kilowatt_1, filename:'kilowatt1.jpeg')

#Ippudo

ippudo = Business.create({name: 'Ippudo', 
   address: '18 Yerba Buena Ln, San Francisco, CA 94103',
   category:'Restaurant',
   website:'https://ippudo-us.com/',
   phone_number: '(415) 348-1202',
   latitude: 37.7861071,
   longitude: -122.4067554,
   weekday_hours: 'Closed',
   weekend_hours: 'Closed'})

   ippudo_1 = open('https://yalp-seeds.s3-us-west-1.amazonaws.com/ippudo1.jpg')
   ippudo.photos.attach(io: ippudo_1, filename:'ippudo1.jpeg')

#Wildseed

wildseed = Business.create({name: 'Wildseed', 
   address: '2000 Union St, San Francisco, CA 94123',
   category:'Restaurant',
   website:'https://www.wildseedsf.com',
   phone_number: '415-872-7350',
   latitude: 37.7976301,
   longitude: -122.4346291,
   weekday_hours: '12:00 pm - 8:00 pm',
   weekend_hours: '12:00 pm - 9:00 pm'})

   wildseed_1 = open('https://yalp-seeds.s3-us-west-1.amazonaws.com/wildseed1.jpg')
   wildseed.photos.attach(io: wildseed_1, filename:'wildseed1.jpeg')
   

   