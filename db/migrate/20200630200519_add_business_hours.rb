class AddBusinessHours < ActiveRecord::Migration[5.2]
  def change
    add_column :businesses, :hours, :string, null:false
  end
end
