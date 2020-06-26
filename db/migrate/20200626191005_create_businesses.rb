class CreateBusinesses < ActiveRecord::Migration[5.2]
  def change
    create_table :businesses do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :category, null: false
      t.string :website
      t.string :phone_number

      t.timestamps
    end
    add_index :businesses, :name, unique:true
    add_index :businesses, :address, unique:true
  end
end
