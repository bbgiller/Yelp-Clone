class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
    def current_user
        @current_user ||= User.find_by(session_token: session[:session_token])
        #return me that user if its exists
    end

    def require_login
        redirect_to  new_session_url unless logged_in?
    end

    def login(user) # resets a user session_token and sets a cookie on the client's browser
        session[:session_token] = user.reset_session_token!
    end

    def logout
        current_user.reset_session_token! if logged_in?
        session[:session_token] = nil #clears the cookie
        @current_user = nil
    end

    def logged_in? #turns value of current user to true or false
        !!current_user
    end
end
