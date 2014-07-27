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

  def email
    @email = {}
    render :layout => false
  end

  def send_mail
    email = params[:email]
    subject = params[:subject]
    body = params[:body]
    UserMailer.contact_me(email, subject, body).deliver
    redirect_to contact_users_path 
  end
end