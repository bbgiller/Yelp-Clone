class AddWeekendHours < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :weekend_hours, :string, null:false
  end
end
