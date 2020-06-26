class Api::BusinessesController < ApplicationController



    private

    def business_params
        params.require(:business).permit(:name,:address,:category,:website,:phone_number)
    end
end
