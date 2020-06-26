class Api::BusinessesController < ApplicationController



    def show
        @business = Business.find(params[:id ])
    end

    private

    def business_params
        params.require(:business).permit(:name,:address,:category,:website,:phone_number)
    end
end
