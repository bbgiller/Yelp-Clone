class Business < ApplicationRecord
    validates :name, :address, :category, presence: true
    validates :name, :address, :latitude, :longitude, uniqueness: true 




end