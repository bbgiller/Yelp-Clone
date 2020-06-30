class Api::BusinessesController < ApplicationController
    def index
        # debugger
        @businesses = Business.all 
        render "/api/businesses/index"
    end


    def show
        @business = Business.find(params[:id ])
    end

    private

    def business_params
        params.require(:business).permit(:name,:address,:category,:website,:phone_number,:longitude, :latitude, :weekday_hours, :weekend_hours)
    end
end
