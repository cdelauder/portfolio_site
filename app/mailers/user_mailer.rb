class UserMailer < ActionMailer::Base
  default to: 'cdelauder@gmail.com'

  def contact_me(email, subject, body)
    @body = body
    mail(from: email, subject: subject)
  end

end