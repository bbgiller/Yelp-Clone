class ChangeBusinessHoursColumns < ActiveRecord::Migration[5.2]
  def change
    rename_column :businesses, :hours, :weekday_hours
    add_column :businesses, :weekend_hours, :string
  end
end
