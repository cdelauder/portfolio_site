class UsersController < ApplicationController
  def index   
  end

  def resume
    render :layout => false
  end

  def download
    send_file("#{Rails.root}/files/chrisdelauder.pdf",
              filename: "#chrisdelauder.pdf",
              type: "application/pdf")
  end

  def display
    send_file("#{Rails.root}/files/chrisdelauder.pdf",
              filename: "#chrisdelauder.pdf",
              disposition: 'inline',
              type: "application/pdf")
  end

  def home
    render :layout => false
  end

  def portfolio
    render :layout => false
  end

  def contact
    render :layout => false
  end
end