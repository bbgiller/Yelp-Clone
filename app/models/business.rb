class Business < ApplicationRecord
    validates :name, :address, :category, presence: true
    validates :name, :address, uniqueness: true 




end