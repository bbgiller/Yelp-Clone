class AddCoordinates < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :latitude, :float, null: false
    add_column :businesses, :longitude, :float, null: false
  end
end
