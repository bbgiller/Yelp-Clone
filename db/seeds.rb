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

 User.create([{email: 'arthurmorgan@gmail.com', password: '123456', 
    first_name: 'Arthur', last_name: 'Morgan', zip_code:'1000'}])

Business.create([{name: 'Blue Barn', 
   address: '2237 Polk Street, San Francisco, CA 94109',
   category:'Restaurant',
   website:'http://www.bluebarngourmet.com',
   phone_number: '415-655-9438',
   latitude: 37.797673,
   longitude: -122.422318}])

Business.create([{name: 'Purple Rice', 
   address: '509 Haight St, San Francisco, CA 94117',
   category:'Restaurant',
   website:'https://purplerice.menu11.com/',
   phone_number: '415-932-6257',
   latitude: 37.772116,
   longitude: -122.430798}])

   