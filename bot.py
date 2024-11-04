import discord
from discord.ext import commands

bot = commands.Bot(command_prefix="!")

@bot.event
async def on_ready():
    print(f'Bot {bot.user} is now running!')

bot.run('MTMwMjg5MTI2NTE5NjgxODQ2Mw.GdYniz.CRtqOu_wh-lzYeRrsrd1gzgv-ozNAT4hooJVDc')
