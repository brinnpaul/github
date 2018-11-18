class Util:
    @staticmethod
    def grab_keys(*args, d={}):
        n = {}
        for arg in args:
            n[arg] = d.get(arg, None)
        return n