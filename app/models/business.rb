class Business < ApplicationRecord
    validates :name, :address, :category, :weekday_hours, :weekend_hours, presence: true
    validates :name, :address, :latitude, :longitude, uniqueness: true 

    has_many_attached :photos




end