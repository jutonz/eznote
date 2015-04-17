class WelcomeController < ApplicationController
  before_action :set_user

  def index
    redirect_to login_path unless current_user.logged_in?
  end

  private

  def set_user
    @current_user = current_user
  end
end
