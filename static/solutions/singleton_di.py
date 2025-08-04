import json
import os
from abc import ABC, abstractmethod

class ConfigInterface(ABC):
    @abstractmethod
    def get_config(self, key: str):
        pass

    @abstractmethod
    def set_config(self, key: str, value):
        pass

class ConfigurationService(ConfigInterface):
    _instance = None

    def __new__(cls, config_file="config.json"):
        if cls._instance is None:
            cls._instance = super(ConfigurationService, cls).__new__(cls)
            cls._instance._initialized = False
        return cls._instance

    def __init__(self, config_file="config.json"):
        if getattr(self, "_initialized", False):
            return
        self.config_file = os.path.join(os.path.dirname(__file__), config_file)
        self.config = {}
        self.load_config()
        self._initialized = True

    def load_config(self):
        if os.path.exists(self.config_file):
            with open(self.config_file, 'r') as f:
                self.config = json.load(f)
        else:
            # Configuration par défaut
            self.config = {
                "database_url": "localhost:5432",
                "api_key": "default_key",
                "debug_mode": True,
                "max_connections": 10
            }

    def get_config(self, key):
        return self.config.get(key)

    def set_config(self, key, value):
        self.config[key] = value

    def save_config(self):
        with open(self.config_file, 'w') as f:
            json.dump(self.config, f, indent=2)

class DatabaseConnection:
    def __init__(self, config_service: ConfigInterface):
        self.config_service = config_service

    def connect(self):
        print(f"Connexion à la base de données: {self.config_service.get_config("database_url")}")
        print(f"Nombre max de connexions: {self.config_service.get_config("max_connections")}")

class ApiClient:
    def __init__(self, config_service: ConfigInterface):
        self.config_service = config_service
        self.api_key = self.config_service.get_config("api_key")

    def make_request(self, endpoint):
        debug_info = " [DEBUG MODE]" if self.config_service.get_config("debug_mode") else ""
        print(f"Requête API vers {endpoint} avec clé: {self.api_key}{debug_info}")

class Logger:
    def __init__(self, config_service: ConfigInterface):
        self.config_service = config_service

    def log(self, message):
        if self.config_service.get_config("debug_mode"):
            print(f"[LOG] {message}")


def main():
    # Récupération de l'instance unique du service de configuration
    config_service = ConfigurationService()

    # Injection des dépendances
    db = DatabaseConnection(config_service)
    api = ApiClient(config_service)
    logger = Logger(config_service)

    db.connect()
    api.make_request("/users")
    logger.log("Application démarrée")

    # Modification de la configuration via le singleton
    config_service.set_config("debug_mode", False)
    # config_service.save_config()

    # Toutes les classes utilisent la même instance et reflètent la modification
    logger.log("Cette ligne ne devrait plus s'afficher ?")

if __name__ == "__main__":
    main()