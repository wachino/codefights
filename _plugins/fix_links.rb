module Jekyll
  class FixLinks < Converters::Markdown
  safe true
  priority :highest

    def convert(content)
      fixed_content = content.gsub('/README.md)', '/)').gsub('.md)', ')')
      super(fixed_content)
    end
  end
end